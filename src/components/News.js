import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {

  articles =[
      
    {
        "source": {
            "id": null,
            "name": "NBCSports.com"
        },
        "author": "Mike Florio",
        "title": "Quinn Ewers enters the NFL draft - NBC Sports",
        "description": "Texas QB forgoes one more year of college eligibity.",
        "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/quinn-ewers-enters-the-nfl-draft",
        "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/1f9effc/2147483647/strip/true/crop/5000x2813+0+594/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F08%2F69%2Fb493438540afbcf72c78df52c076%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2193584709",
        "publishedAt": "2025-01-15T16:50:32Z",
        "content": "Quinn Ewers is moving on to the next level of professional football.\r\nEwers has decided to forego his remaining eligibility to get paid to play college football to get paid by the NFL.\r\nHis agent, Ro… [+681 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NBCSports.com"
        },
        "author": "Mike Florio",
        "title": "Cowboys are expected to interview former Jets coach Robert Saleh - NBC Sports",
        "description": "The NFL is the ultimate reality show.",
        "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/cowboys-are-expected-to-interview-former-jets-coach-robert-saleh",
        "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/5ccddae/2147483647/strip/true/crop/5428x3053+0+283/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F10%2F1c%2Fac2c37204ef59cde45db075ec226%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2173238144",
        "publishedAt": "2025-01-15T16:36:42Z",
        "content": "The NFL is the ultimate reality show. And the Cowboys are the NFLs ultimate reality show.\r\nEpisode One for 2025: What happens with Mike McCarthy? Episode Two: Prime Time!\r\nEpisode Three: The search b… [+866 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": null,
        "title": "Lions vs. Commanders odds, line, spread: 2025 NFL Divisional Round picks, prediction by model on 31-15 run - CBS Sports",
        "description": "SportsLine's model simulated Saturday's Washington vs. Detroit Divisional Round matchup 10,000 times and revealed its NFL best bets for the 2025 NFL playoffs",
        "url": "https://www.cbssports.com/nfl/news/lions-vs-commanders-odds-line-spread-2025-nfl-divisional-round-picks-prediction-by-model-on-31-15-run/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/11/27/8d11b4dc-4d6f-400a-b158-746c846426e9/thumbnail/1200x675/7f9f6d07932b8c0a253775e6d4d799f6/jared-goff-lions-usatsi.jpg",
        "publishedAt": "2025-01-15T14:45:56Z",
        "content": "The Detroit Lions will begin their quest to reach their first-ever Super Bowl when they take on the upstart Washington Commanders in a 2025 NFL Divisional Round matchup on Saturday. Washington is com… [+4366 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sports Illustrated"
        },
        "author": "Bob Harig",
        "title": "Tiger Woods’s Team Routed As New TGL Simulator Golf League Sees Another Blowout - Sports Illustrated",
        "description": "Jupiter Links’s players kept it light as the points piled up against them, emphasizing the entertainment factor during the second week of the new venture.",
        "url": "https://www.si.com/golf/tiger-woods-team-routed-new-tgl-simulator-golf-league-another-blowout",
        "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_7008,h_3942,x_0,y_249/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jhm0z3t2fmxkrj88zm.jpg",
        "publishedAt": "2025-01-15T14:03:41Z",
        "content": "PALM BEACH GARDENS, Fla. By the time Tiger Woodss tee shot on the 13th hole came up short in an imaginary hazard on the huge simulator screen, his Jupiter Links team had long been left to take the ba… [+4063 chars]"
    }
]

constructor()
 { super();
  console.log("hello i am a constructor from news components");
  this.state = {
    articles:this.articles,
  }  }
  
  render() {
  
    return (
      <div className="container my-3">
        <h2>Newsly-Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl= {element.urlToImage} newsUrl={element.url}/>
        </div>
        })}            
        </div>
      </div>
    )
  }
}

export default News
