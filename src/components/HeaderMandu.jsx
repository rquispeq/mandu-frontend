import { Button, Col, Row, Layout } from "antd"
const { Header } = Layout


const HeaderMandu = () => (
<Header>
    <Row>
        <Col span={8}>
            <Button type="text" className="white">Dashboard</Button>
            <Button type="text" className="white">Organización</Button>
            <Button type="text" className="white">Modelos</Button>
            <Button type="text" className="white">Seguimiento</Button>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
            <Button type="text" className="white">Administrador</Button>
        </Col>
    </Row>
</Header>
)

export default HeaderMandu