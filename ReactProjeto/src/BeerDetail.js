import React, { Component } from "react";
import axios from "axios";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      cervejaDetalhada: null
    };    
  }

  componentDidMount() {
    console.log("STATE: " + this.state.id);
    axios.get(`https://api.punkapi.com/v2/beers/${this.state.id}`).then(res => {
      const cerveja = res.data;      
      this.setState({ cervejaDetalhada: cerveja });
    });
  }

  render() {  
    let cerva = (this.state.cervejaDetalhada);
    if(cerva == null){
        return <div></div>;
    } 
    return (
      <div>
        <div className="container marginTop">
          <div className="row">            
            <div className="col-sm-12">
              <div className="card-body border mb-2 boxShadow">
                <h5 className="card-title">{cerva[0].name}</h5>
                <hr/>
                <br/>
                <div>
                  Descrição: {cerva[0].description}
                </div>
                <br/>
                <p className="card-text d-flex flex-row">
                  Tagline: {cerva[0].tagline}
                </p>
                <br/>
                <div className="flexDetailImage">
                  <img src={cerva[0].image_url} className="beerDetailWidth"/>
                </div>
              </div>
            </div>             
          </div>
        </div>
      </div>
    );
  }  

  /*render2() {
    let cerva = (this.state.cervejaDetalhada);
    if(cerva == null){
        return <div></div>;
    }    
    return (        
      <div className="flex marginTop">
        <div>
          Nome: {cerva[0].name}
        </div>
        <br/>
        <div>
          Descrição: {cerva[0].description}
        </div>
        <br/>
        <input class="form-control-plaintext" id="descricao" readOnly />
        <div>
          Tagline: {cerva[0].tagline}
        </div>
        <br/>
         <div>
           <img src={cerva[0].image_url} className="beerDetailWidth"/>
         </div>
       </div>
    );
  }*/

}

export default BeerDetail;
