import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  static propTypes = {}
  articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By <a href=\"/profiles/jessie-yeung\">Jessie Yeung</a> and <a href=\"/profiles/andrew-raine\">Andrew Raine</a>, CNN",
            "title": "Russia's war in Ukraine - CNN",
            "description": "The UN chief is heading to Moscow to meet Russian President Vladimir Putin on Tuesday, as heavy fighting continues in Ukraine. Follow here for live news updates.",
            "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-04-26-22/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220425132538-primera-soldados-ucranianos-super-tease.jpg",
            "publishedAt": "2022-04-26T06:31:00Z",
            "content": "The self-proclaimed republic of Transnistria which has its own constitution, military, currency and flag but has never been recognized by the international community could be pulled into Russia's war… [+2481 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Catherine Shu",
            "title": "Jack Dorsey says Elon Musk “is the singular solution I trust” - TechCrunch",
            "description": "Jack Dorsey, the co-founder of Twitter and current Block Head, has weighed on how he feels about Elon Musk buying Twitter. In a tweet thread that starts out with a link to Radiohead’s “Everything In Its Right Place,” Dorsey said that “in principle, I don’t be…",
            "url": "https://techcrunch.com/2022/04/25/jack-dorsey-says-elon-musk-is-the-singular-solution-i-trust/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-1321753242.jpg?w=545",
            "publishedAt": "2022-04-26T05:10:11Z",
            "content": "Jack Dorsey, the co-founder of Twitter and current Block Head, has weighed on how he feels about Elon Musk buying Twitter. In a tweet thread that starts out with a link to Radioheads Everything In It… [+1423 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mavs Moneyball"
            },
            "author": "Ben Zajdel",
            "title": "3 things from a Dallas Mavericks demolition of the Utah Jazz, 102-77 - Mavs Moneyball ",
            "description": "The Mavericks beat the Jazz and it wasn’t close at all.",
            "url": "https://www.mavsmoneyball.com/2022/4/25/23042134/3-things-from-a-dallas-mavericks-demolition-of-the-utah-jazz-102-77-recap-final-score",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/p41jUYI6uqwwaZwp1WBT5DiiA2A=/0x73:5500x2953/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23416545/usa_today_18154133.jpg",
            "publishedAt": "2022-04-26T04:18:50Z",
            "content": "The Dallas Mavericks crushed the Utah Jazz 102-77 Monday night in Dallas. The 25 point margin doesnt do justice to how badly Dallas defeated Utah. The Game 5 win puts the Mavericks up in the series 3… [+4922 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Parents File Lawsuit After Teen Fell To His Death From Orlando Free Fall Ride - CBS Miami",
            "description": "The family of the 14-year-old Missouri boy who was tragically killed after falling from an Orlando ride is now filing a wrongful death lawsuit.",
            "url": "https://www.youtube.com/watch?v=wysyL4bUo60",
            "urlToImage": "https://i.ytimg.com/vi/wysyL4bUo60/maxresdefault.jpg",
            "publishedAt": "2022-04-26T03:29:47Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Latest on baby kidnapping in San Jose - KRON 4",
            "description": "KRON4's Dan Thorn and Justin Campbell report.",
            "url": "https://www.youtube.com/watch?v=ygohGdWEdXo",
            "urlToImage": "https://i.ytimg.com/vi/ygohGdWEdXo/maxresdefault.jpg",
            "publishedAt": "2022-04-26T03:27:56Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Scott Cacciola",
            "title": "Nets Eliminated by Celtics in NBA Playoffs - The New York Times",
            "description": "The early playoff exit was a stunning end to a season that began with championship dreams behind Kevin Durant and Kyrie Irving.",
            "url": "https://www.nytimes.com/2022/04/25/sports/basketball/nets-eliminated-celtics-sweep.html",
            "urlToImage": "https://static01.nyt.com/images/2022/04/25/sports/25nba-nets-G4-irving/25nba-nets-G4-irving-facebookJumbo.jpg",
            "publishedAt": "2022-04-26T03:11:39Z",
            "content": "Durant missed 21 games after spraining his knee in January, then played heavy minutes late in the regular season as the team scrambled for a spot in the play-in tournament.\r\nI think our guys wore dow… [+1701 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Justin Kroll",
            "title": "Bad Bunny To Play Spider-Man Character El Muerto In Standalone Marvel Pic For Sony - Deadline",
            "description": "Looking to continue to expand and diversify its universe of Marvel characters, Sony has announced a El Muerto movie is in development with Latin Grammy winner and platinum-selling recording artist Bad Bunny attached to star. The news came out of Cinemacon dur…",
            "url": "https://deadline.com/2022/04/bad-bunny-spider-man-el-muerto-sonys-marvel-pic-1235009269/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-25-at-7.38.29-PM.png?w=1016",
            "publishedAt": "2022-04-26T02:25:00Z",
            "content": "Looking to continue to expand and diversify its universe of Marvel characters, Sony has announced a El Muerto movie is in development with Latin Grammy winner and platinum-selling recording artist Ba… [+2509 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hot Air"
            },
            "author": "Karen Townsend",
            "title": "Bird flu blues: Officials say to put away bird feeders, free range chickens move indoors - Hot Air",
            "description": "Questions abound",
            "url": "https://hotair.com/karen-townsend/2022/04/25/bird-flu-blues-officials-say-to-put-away-bird-feeders-free-range-chickens-move-indoors-n464738",
            "urlToImage": "https://media.townhall.com/townhall/reu/o/2017/172/8c37c949-8aed-4514-b001-08b062a531f5-1110x740.jpg",
            "publishedAt": "2022-04-26T02:01:00Z",
            "content": "If you are a resident of Illinois, the Illinois Department of Natural Resources (IDNR) recommends you put away bird feeders and wash out birdbaths at least until May 31. A nationwide outbreak of the … [+6194 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "profootballrumors.com"
            },
            "author": null,
            "title": "Jaguars' Shad Khan, Trent Baalke Disagree On No. 1 Pick? - profootballrumors.com",
            "description": "Four prospects are believed to be in play for the Jaguars at No. 1 overall, but it might be a &hellip;",
            "url": "https://www.profootballrumors.com/2022/04/jaguars-shad-khan-trent-baalke-disagree-on-no-1-pick",
            "urlToImage": "https://cdn.profootballrumors.com/files/2022/03/USATSI_16851114-1024x683.jpg",
            "publishedAt": "2022-04-26T01:50:00Z",
            "content": "Four prospects are believed to be in play for the Jaguars at No. 1 overall, but it might be a matchup between two defensive ends by the time the top decision-makers huddle up for their final decision… [+2267 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Chris Cameron",
            "title": "How Americans Can Sponsor Ukrainian Refugees - The New York Times",
            "description": "Most people in the United States are eligible to sponsor Ukrainian migrants under a program the Biden administration established on Monday. Here’s how it works.",
            "url": "https://www.nytimes.com/2022/04/25/us/politics/americans-sponsor-ukrainians.html",
            "urlToImage": "https://static01.nyt.com/images/2022/04/25/us/politics/25dc-ukraine-immig/25dc-ukraine-immig-facebookJumbo.jpg",
            "publishedAt": "2022-04-26T01:17:00Z",
            "content": "The Biden administration on Monday established a program that allows Americans to sponsor Ukrainian refugees and have them temporarily stay in the United States under a system known as humanitarian p… [+858 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nintendo Life"
            },
            "author": "Liam Doolan",
            "title": "The Super Mario Movie Has Been Delayed Until April 2023 - Nintendo Life",
            "description": "Miyamoto says it'll be \"worth the wait\"",
            "url": "https://www.nintendolife.com/news/2022/04/the-super-mario-movie-has-been-delayed-until-april-2023",
            "urlToImage": "https://images.nintendolife.com/215d87fdf840d/1280x720.jpg",
            "publishedAt": "2022-04-26T01:10:00Z",
            "content": "Image: Nintendo\r\nThe Super Mario animated movie starring Chris Pratt was scheduled to arrive later this year, but it seems plans have now officially changed.\r\nNintendo's very own Shigeru Miyamoto has… [+1675 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Marjorie Hernandez",
            "title": "Kylie Jenner claims Blac Chyna threatened her, tried to kill Rob Kardashian - Page Six",
            "description": "Jenner took the stand during the ongoing Kardashian-Chyna court battle, testifying that she remembers seeing Rob shortly after his fight with Chyna in December 2016.",
            "url": "https://pagesix.com/2022/04/25/kylie-jenner-blac-chyna-threatened-me-tried-to-kill-rob/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/04/kylie-blac-rob-index.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2022-04-26T00:35:00Z",
            "content": "Kylie Jenner claims Blac Chyna tried to kill her brother, Rob Kardashian, and threatened her in text messages during her bombshell testimony.\r\nThe Kylie Cosmetics founder took the stand on Monday dur… [+4239 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Krystal Hur",
            "title": "Cramer's lightning round: Capri Holdings is a buy - CNBC",
            "description": "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
            "url": "https://www.cnbc.com/2022/04/25/cramers-lightning-round-capri-holdings-is-a-buy.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/102079128-1539342565979105501689.jpg?v=1539342593&w=1920&h=1080",
            "publishedAt": "2022-04-26T00:08:00Z",
            "content": "Lithium Americas Corp: \"These companies are making way too much money. ... You have to sell that stock, because it won't stay like that.\"\r\nInformatica Inc: \"It's now come down so much that I think it… [+467 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Evan Simko-Bednarski",
            "title": "Court blocks Biden from lifting Title 42 border restrictions on May 23 - New York Post ",
            "description": "“Our Office just obtained a temporary restraining order to keep Title 42 in place,” Missouri Attorney General Eric Schmitt tweeted Monday. ‘This is a huge victory for border secur…",
            "url": "https://nypost.com/2022/04/25/court-blocks-biden-from-lifting-title-42-border-restrictions-on-may-23/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/04/texas-border-index-1.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2022-04-25T23:57:00Z",
            "content": "A Louisiana federal court issued a temporary restraining order Monday preventing the Biden administration from lifting pandemic restrictions at the southern border.\r\nThe restrictions, known as Title … [+3027 chars]"
        },
        {
            "source": {
                "id": "breitbart-news",
                "name": "Breitbart News"
            },
            "author": "Gabrielle Reyes",
            "title": "Democratic Republic of the Congo Declares Ebola Outbreak - Breitbart",
            "description": "DRC declared a new epidemic of the Ebola virus in the nation's north-western city of Mbandaka, located in Equateur Province.",
            "url": "https://www.breitbart.com/africa/2022/04/25/democratic-republic-congo-declares-ebola-outbreak/",
            "urlToImage": "https://media.breitbart.com/media/2019/08/workers-clinic-ebola-beni-dr-congo-ap-640x335.jpg",
            "publishedAt": "2022-04-25T23:33:44Z",
            "content": "The Democratic Republic of the Congo (DRC) declared a new epidemic of the Ebola virus in the nation’s northwestern city of Mbandaka, located in DRC’s Equateur Province, on Saturday, Sky News reported… [+3859 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Julia Jacobs, Colin Moynihan",
            "title": "Johnny Depp and Amber Heard’s Fight Left Home Damaged, Witness Says - The New York Times",
            "description": "At the trial in the defamation case filed by Mr. Depp, a property manager gave vivid descriptions of how one 2015 fight left behind blood and broken fixtures.",
            "url": "https://www.nytimes.com/2022/04/25/arts/johnny-depp-amber-heard-trial.html",
            "urlToImage": "https://static01.nyt.com/images/2022/04/25/multimedia/25depp-1/25depp-1-facebookJumbo.jpg",
            "publishedAt": "2022-04-25T23:31:40Z",
            "content": "There can be little doubt that the atmosphere between the two was sometimes incendiary.\r\nMr. Depp was confronted during cross-examination with text messages to others in which he referred to Ms. Hear… [+1396 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Michael Crowley, Edward Wong",
            "title": "Biden Picks Bridget Brink to Be Ambassador to Ukraine - The New York Times",
            "description": "The U.S. Embassy, which closed just before Russia’s invasion, could reopen “over a couple of weeks,” Secretary of State Antony Blinken said.",
            "url": "https://www.nytimes.com/2022/04/25/us/politics/ukraine-ambassador-embassy-biden.html",
            "urlToImage": "https://static01.nyt.com/images/2022/04/25/us/politics/25dc-ambassador/25dc-ambassador-facebookJumbo.jpg",
            "publishedAt": "2022-04-25T23:28:31Z",
            "content": "Ms. Brink would be the first Senate-confirmed ambassador to hold the post since mid-2019, when President Donald J. Trump removed Marie L. Yovanovitch, a career diplomat and anti-corruption advocate w… [+1966 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Robert Costa",
            "title": "Texts show Marjorie Taylor Greene asked Meadows about martial law - CBS News",
            "description": "The Georgia congresswoman has testified she doesn't recall whether she encouraged Trump to impose martial law.",
            "url": "https://www.cbsnews.com/news/marjorie-taylor-greene-texted-meadows-martial-law/",
            "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2022/04/22/485f9eb5-c504-4fb2-bcb3-291cfd686f1d/thumbnail/1200x630g2/af200aa3b1d136164e3ffa95d6465ade/gettyimages-1240152535.jpg",
            "publishedAt": "2022-04-25T23:09:00Z",
            "content": "Washington — In mid-January 2021, just days before President Joe Biden's inauguration, Republican Rep. Marjorie Taylor Greene, of Georgia, texted then-White House chief of staff Mark Meadows to tell … [+4453 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cbslocal.com"
            },
            "author": "WCCO-TV Staff",
            "title": "Lily Peters, Missing Wis. Girl, Found Dead; Police Investigating As Homicide - CBS Minnesota",
            "description": "Iliana Peters, who went by Lily, was found dead around 9:15 a.m. Monday, according to the Chippewa Falls Police Department.",
            "url": "https://minnesota.cbslocal.com/2022/04/25/chippewa-falls-wisconsin-missing-10-year-old-girl/",
            "urlToImage": "https://minnesota.cbslocal.com/wp-content/uploads/sites/15909630/2022/04/10P-Pkg-WI-Girl-Killed_WCCO1BDF_1.jpg?w=1500",
            "publishedAt": "2022-04-25T23:09:00Z",
            "content": "CHIPPEWA FALLS, Wis. (WCCO) — Police in a western Wisconsin city are telling the community to stay vigilant after the murder of a little girl.\r\nTen-year-old Iliana Peters, who went by Lily, was found… [+2457 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Beth Mole",
            "title": "Mysterious outbreak of hepatitis in children grows, first death reported - Ars Technica",
            "description": "An adenovirus remains the top suspect, but that still has experts puzzled.",
            "url": "https://arstechnica.com/science/2022/04/who-reports-first-child-death-17-transplants-in-growing-hepatitis-mystery/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2022/04/GettyImages-151062565-760x380.jpeg",
            "publishedAt": "2022-04-25T22:44:15Z",
            "content": "Enlarge/ Liver lesions in patient with chronic active hepatitis C.\r\n72 with 40 posters participating\r\nAt least one child has died of unexplained liver inflammation in a growing international outbreak… [+4455 chars]"
        }
  ]

  constructor(){
      super()
      this.state = {
          article: this.articles,
          loading: false
      }
  }

  render() {

    return (
      <div>
          <div className="container my-3">
                <div className="row">
                    {this.state.article.map((element)=>{
                            return <div className="col-md-4 my-3" key={element.url}>
                                <Newsitem title={element.title.slice(0,40)} postdesc={element.description.slice(0,88)} imageurl={element.urlToImage} newsurl={element.url} />
                            </div>
                    })}
                </div>
          </div>
          
      </div>
    )
  }
}

export default News