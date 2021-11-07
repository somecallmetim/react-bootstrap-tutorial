import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Alert,
    Breadcrumb,
    Card,
    Form,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <Container>
                    <Card className='mb-3 mt-3' style={{ color: "black" }}>
                        <Card.Img src='https://picsum.photos/200/100' />
                        <Card.Body>
                            <Card.Title>Card Example</Card.Title>
                            <Card.Text>This is an example of a card</Card.Text>
                            <Button variant='primary'>Read more</Button>
                        </Card.Body>
                    </Card>
                    <Breadcrumb>
                        <Breadcrumb.Item>Test</Breadcrumb.Item>
                        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Form>
                        <Row>
                            <Col md>
                                <Form.Group controlId='formEmail'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder='example@example.com'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group controlId='formPassword'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder='password'
                                    />
                                </Form.Group>
                            </Col>
                            <Form.Text className='text-muted'>
                                We'll never share your email address, trust us!
                            </Form.Text>
                        </Row>
                        <Button
                            className='my-3'
                            variant='secondary'
                            type='submit'
                        >
                            Login
                        </Button>
                    </Form>
                    <Alert variant='primary'>This is a button</Alert>
                    <Button>Test Button</Button>
                </Container>
            </header>
        </div>
    );
}

export default App;
