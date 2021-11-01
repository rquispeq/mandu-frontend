import { Col, Row, Menu, Radio, Select } from "antd"
import Search from "antd/lib/input/Search"
import { Content } from "antd/lib/layout/layout"
import TableDataMandu from "./TableDataMandu"

const { Option } = Select

const MainContent = () => {

    return (<Content>
            <Row>
                <Col span={24}>Organización</Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Menu mode="horizontal" selectedKeys="divisions">
                        <Menu.Item key="divisions">
                            Divisiones
                        </Menu.Item>
                        <Menu.Item key="Colaborators">
                            Colaboradores
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Radio.Group>
                        <Radio.Button value="list">Listado</Radio.Button>
                        <Radio.Button value="tree">Árbol</Radio.Button>
                    </Radio.Group>
                </Col>
                <Col span={12}>
                    <Select style={{ width: 120 }} defaultValue="columnas">
                        <Option value="columnas">Columnas</Option>
                        <Option>Column 1</Option>
                        <Option>Column 2</Option>
                        <Option>Column 3</Option>
                    </Select>
                    <Search placeholder="input search text"  style={{ width: 200 }} />
                </Col>
            </Row>
            <Row>
            <TableDataMandu />
            </Row>
        </Content>)
}

export default MainContent