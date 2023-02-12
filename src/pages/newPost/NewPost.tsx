import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Col,
    Form,
    Row,
    Stack,
    FloatingLabel,
    Image,
    Button
} from 'react-bootstrap';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { useForm } from '../../hooks';
import { auth, db, storage } from '../../utils/firebase';

const NewPost: React.FC = () => {
    const navigate = useNavigate();
    const [values, setValues] = useForm({
        title: '',
        content: '',
        topic: ''
    });
    const [file, setFile] = useState<File>();

    const previewUrl = file
        ? URL.createObjectURL(file)
        : 'https://react.semantic-ui.com/images/wireframe/image.png';

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        try {
            e.preventDefault();

            const docRef = doc(db, 'posts');
            let postImageUrl = '';

            if (file) {
                const fileRef = ref(storage, `post-images/${docRef.id}`);
                const snapshot = await uploadBytes(fileRef, file);

                postImageUrl = await getDownloadURL(snapshot.ref);
            }

            setDoc(docRef, {
                ...values,
                postImageUrl,
                createAt: Timestamp.now(),
                author: {
                    displayName: auth.currentUser?.displayName || '',
                    photoUrl: auth.currentUser?.photoURL || '',
                    uid: auth.currentUser?.uid,
                    email: auth.currentUser?.email
                }
            }).then(() => {
                navigate('/');
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Row>
            <Col as={Form} onSubmit={handleSubmit}>
                <Stack gap={3}>
                    <h2 className="fw-bold fs-4">發表文章</h2>
                    <div className="d-flex align-items-center gap-3">
                        <Image src={previewUrl} width="25%" />
                        <Button
                            as="label"
                            htmlFor="postImage"
                            variant="outline-secondary"
                        >
                            上傳文章圖片
                        </Button>
                    </div>
                    <Form.Control
                        id="postImage"
                        type="file"
                        className="d-none"
                        accept="image/*"
                        onChange={(e) =>
                            setFile((e.target as HTMLInputElement).files?.[0])
                        }
                    />
                    <FloatingLabel label="標題">
                        <Form.Control
                            placeholder="請輸入標題"
                            name="title"
                            value={values.title}
                            onChange={setValues}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel label="內容">
                        <Form.Control
                            type="textarea"
                            placeholder="請輸入內容"
                            name="content"
                            value={values.content}
                            onChange={setValues}
                            required
                        />
                    </FloatingLabel>
                    <Form.Select
                        name="topic"
                        onChange={setValues}
                        value={values.topic}
                        required
                    >
                        <option value="">請選擇主題</option>
                        <option value="運動">運動</option>
                        <option value="電影">電影</option>
                    </Form.Select>
                    <Button
                        type="submit"
                        variant="secondary"
                        className="ms-auto"
                    >
                        送出
                    </Button>
                </Stack>
            </Col>
        </Row>
    );
};

export default NewPost;
