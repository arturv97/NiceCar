/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Icons = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0">Carros</h3>
              </CardHeader>
              <CardBody>
                <Row className="icon-examples">
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-active-40"}
                    >
                      <button
                        className="grid-carros"
                        id="tooltip982655500"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-active-40" />
                          <span>active-40</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip982655500"
                    >
                      Descrição veículo 1
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-air-baloon"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="air-baloon"
                        id="tooltip47550434"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-air-baloon" />
                          <span>air-baloon</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip47550434"
                    >
                      Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-album-2"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="album-2"
                        id="tooltip945481346"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-album-2" />
                          <span>album-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip945481346"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-align-center"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="align-center"
                        id="tooltip662352101"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-align-center" />
                          <span>align-center</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip662352101"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-left-2"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="align-left-2"
                        id="tooltip125499785"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-align-left-2" />
                          <span>align-left-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip125499785"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-ambulance"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="ambulance"
                        id="tooltip382136785"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-ambulance" />
                          <span>ambulance</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip382136785"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-asdasdsafsdsad"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="app"
                        id="tooltip3354607"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-app" />
                          <span>app</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip3354607"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-archive-2"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="archive-2"
                        id="tooltip949558633"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-archive-2" />
                          <span>archive-2</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip949558633"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-atom"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="atom"
                        id="tooltip742747005"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-atom" />
                          <span>atom</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip742747005"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-badge"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="badge"
                        id="tooltip488565068"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-badge" />
                          <span>badge</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip488565068"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bag-17"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="bag-17"
                        id="tooltip163626790"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bag-17" />
                          <span>bag-17</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip163626790"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-basket"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="basket"
                        id="tooltip387253692"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-basket" />
                          <span>basket</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip387253692"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bell-55"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="bell-55"
                        id="tooltip126752761"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bell-55" />
                          <span>bell-55</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip126752761"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-down"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="bold-down"
                        id="tooltip819281856"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-down" />
                          <span>bold-down</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip819281856"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-left"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="bold-left"
                        id="tooltip881699027"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-left" />
                          <span>bold-left</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip881699027"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-right"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="bold-right"
                        id="tooltip208507461"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-right" />
                          <span>bold-right</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip208507461"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold-up"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="bold-up"
                        id="tooltip105289310"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold-up" />
                          <span>bold-up</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip105289310"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-bold"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="bold"
                        id="tooltip832362262"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-bold" />
                          <span>bold</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip832362262"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-book-bookmark"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="book-bookmark"
                        id="tooltip606002875"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-book-bookmark" />
                          <span>book-bookmark</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip606002875"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="3" md="6">
                    <CopyToClipboard
                      text={"ni ni-books"}
                    >
                      <button
                        className="grid-carros"
                        data-clipboard-text="books"
                        id="tooltip484529730"
                        type="button"
                      >
                        <div>
                          <i className="ni ni-books" />
                          <span>books</span>
                        </div>
                      </button>
                    </CopyToClipboard>
                    <UncontrolledTooltip
                      delay={0}
                      trigger="hover focus"
                      target="tooltip484529730"
                    >
                        Descrição veículo
                    </UncontrolledTooltip>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Icons;
