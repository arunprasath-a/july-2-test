//method 1

// import React from 'react';
// import axios from "axios";

// import "../../css/loader.css";

// const piJsonURL = "../json_files/pichart.json";
// const barJsonURL = "../json_files/barchart.json";
// const lineJsonURL = "../json_files/linechart.json";
// const radarJsonURL = "../json_files/radarchart.json";



// const MyHOC = (WrappedComponent) => {
//     class NewComponent extends React.Component {


//         constructor(props) {
//             super(props);
//             this.state = {
//                 isLoading: true
//             }

//         }


//         componentDidMount() {
//             this.loadAllData();

//         }


//         loadAllData() {
//             setTimeout(() => {
//                 return axios.all([
//                     axios.get(piJsonURL),
//                     axios.get(barJsonURL),
//                     axios.get(lineJsonURL),
//                     axios.get(radarJsonURL)
//                 ])
//                     .then(axios.spread((pichart, barchart, linechart, radarchart) => {
//                         this.setState({
//                             pichartData: pichart["data"].data,
//                             barchartData: barchart["data"].data,
//                             linechartData: linechart["data"].data,
//                             radarchartData: radarchart["data"].data,

//                         })
//                         this.setState({ isLoading: false })
//                     })
//                     )
//             }, 100)
//         }







//         render() {

//             const { pichartData, barchartData, linechartData, radarchartData, data, isLoading, qwe } = this.state;

//             return this.state.isLoading ?
//                 <div className="loader"></div>
//                 :
//                 <WrappedComponent
//                     data={data}
//                     pichartData={pichartData}
//                     barchartData={barchartData}
//                     linechartData={linechartData}
//                     radarchartData={radarchartData}
//                     isLoading={isLoading}
//                     Qwe={this.Qwe}
//                     {...this.props} />
//         }


//     }

//     return (NewComponent);
// }

// export default MyHOC;

//************************************************************//
//method 2


import React from 'react';
import "../../css/loader.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadbarChartData } from "../../store/actions/actions";




const MyHOC = (WrappedComponent) => {
    class NewComponent extends React.Component {


        constructor(props) {
            super(props);
            this.state = {
                isLoading: false,
                BarSwapCount: 0
            }

        }

        onSwapBar() {
            this.setState({
                BarSwapCount: this.state.BarSwapCount + 1
            })

            if (this.state.BarSwapCount % 2 === 0) {
                document.getElementById("barTable").style.display = "block";
                document.getElementById("barChart").style.display = "none";
            } else {
                document.getElementById("barTable").style.display = "none";
                document.getElementById("barChart").style.display = "block";
            }
        }


        componentDidMount() {
            //this.loadbarChartData();
            this.BarChartComponent();


        }

        AgGridComponent = () => {
            return (
                <React.Fragment>

                </React.Fragment>
            )
        }


        PiChartComponent = () => {
            return (
                <React.Fragment>

                </React.Fragment>
            )
        }

        BarChartComponent = () => {
            return (
                <React.Fragment>
                    <div className="bar chart">

                        <div className="Barchartdiv" id="barChart"></div>
                        
                        <div id="barTable" style={{ height: "300px", display: "none", padding: "10px", overflow: "scroll" }}>

                            <Table striped bordered hover>
                                <thead style={{ backgroundColor: "black", color: "white" }}>
                                    <tr>
                                        <th>Country</th>
                                        <th>Visits</th>
                                    </tr>
                                </thead>
                                <tbody>{this.props.data.data.map((item, index) => {
                                    return (
                                        <tr key={"tr" + index}>
                                            <td key={"td1" + index}>{item.country}</td>
                                            <td key={"td2" + index}>{item.visits}</td>
                                        </tr>

                                    )
                                })}

                                </tbody>
                            </Table>
                        </div>

                        <hr></hr>
                        <Container>
                            <Row>
                                <Col className="btn1 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
                                <Col className="btn2 btnchart"><button className="btnswap" disabled>Placeholder</button></Col>
                                <Col className="btn3 btnchart"><button className="btnswap" onClick={this.onSwapBar.bind(this)}>Swap</button></Col>
                            </Row>
                        </Container>
                    </div>
               
                </React.Fragment>
            )
        }

        LineChartComponent = () => {
            return (
                <React.Fragment>

                </React.Fragment>
            )
        }

        RadarChartComponent = () => {
            return (
                <React.Fragment>

                </React.Fragment>
            )
        }





        render() {

            const { AgGridComponent, PiChartComponent, BarChartComponent, LineChartComponent, RadarChartComponent } = this.state;
            const {BarChartData} = this.props;

            return this.state.isLoading ?
                <div className="loader"></div>
                :
                <WrappedComponent
                    AgGridComponent={AgGridComponent}
                    PiChartComponent={PiChartComponent}
                    BarChartComponent={BarChartComponent}
                    LineChartComponent={LineChartComponent}
                    RadarChartComponent={RadarChartComponent}
                    {...this.props} />
        }


    }

    return (NewComponent);
}

// const mapStateToProps = (state) => {
//     return {
//         barchartData: state.mainReducer.barchartData,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         loadbarChartData: loadbarChartData,
//     }, dispatch)
// }

export default MyHOC;