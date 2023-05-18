/**
 * main page information component
 */
import "./MainInfo.css"

const MainInfo = () => {
    return <>
        <div className="top">
            <h1>모나리자와 블러드 문</h1>
            <div className="top__description">
                <div className="top__left">
                    <p>Mona lisa and the blood Moon</p>
                    <p className="top__year">2023 R 1h 46m</p>
                </div>
                <div className="top__right">
                    <img className="top__imdbIcon" src={process.env.PUBLIC_URL + "/imgs/imdbIcon.png"} alt=""
                        onClick={() => { "location.href='https://www.imdb.com/title/tt8760670/?ref_=nv_sr_srsg_0'" }} />
                    <img className="top__daumIcon" src={process.env.PUBLIC_URL + "/imgs/daumIcon.png"} alt=""
                        onClick={() => { "location.href='https://movie.daum.net/moviedb/main?movieId=133138'" }} />
                </div>
            </div>
        </div>
        <div>
            <img className="body__poster" src={process.env.PUBLIC_URL + "/imgs/mona-poster1.jpeg"} alt="" />
            <img className="body__poster" src={process.env.PUBLIC_URL + "/imgs/mona-poster2.jpeg"} alt="" />
            <iframe width="560" height="308" src="https://www.youtube.com/embed/NOb0spi2u1Y"
                title="MONA LISA AND THE BLOOD MOON | Official Trailer | Paramount Movies" frameborder="0"
                allowfullscreen></iframe>
        </div>
        <div className="body__description">
            <article className="body__movieLogline">
                붉은 달이 뜨던 밤, 폐쇄병동에서 탈출한
                '모나'는 화려한 조명에 이끌려 도착한 낯선 도시에서
                자신의 특별함을 알아챈 기묘한 사람들을 만난다.
                모나의 능력으로 일확천금을 꿈꾸는 댄서 '보니'
                모나한테 첫눈에 반한 로맨티스트 DJ '퍼즈'
                모나에게 락 스피릿을 가르친 11살의 소울메이트 '찰리'
                그리고 모나를 뒤쫓는 언럭키한 경찰 '해롤드'까지
                완벽한 밤… 완전한 자유? 완성된 운명!
                새로운 세상으로 향하는 '모나'의 모험이 펼쳐진다.
            </article>
            <div className="body__director">
                <p><span>director</span> : Ana Lily Amirpour</p>
                <p><span>writer</span> : Ana Lily Amirpour</p>
            </div>
        </div>
        <hr className="body__border" />

        <div className="body__content">
            <h2 className="body__title">출연</h2>
            <div className="body__casts">
                <div className="body__cast">
                    <img src={process.env.PUBLIC_URL + "/imgs/Jeon.jpeg"} alt="" />
                    <p>전종서</p>
                </div>
                <div className="body__cast">
                    <img src={process.env.PUBLIC_URL + "/imgs/Kate.jpg"} alt="" />
                    <p>케이트 허드슨</p>
                </div>
                <div className="body__cast">
                    <img src={process.env.PUBLIC_URL + "/imgs/Craig.jpeg"} alt="" />
                    <p>크레이그 로빈슨</p>
                </div>
                <div className="body__cast">
                    <img src={process.env.PUBLIC_URL + "/imgs/ED.png"} alt="" />
                    <p>에드 스크레인</p>
                </div>
                <div className="body__cast">
                    <img src={process.env.PUBLIC_URL + "/imgs/Evan.jpg"} alt="" />
                    <p>에반 휘튼</p>
                </div>
            </div>
        </div>
        <div className="body__content">
            <h2 className="body__title">수상내역</h2>
            <p><span>2022</span> 제라르메국제판타스틱영화제 음악상(애나 릴리 아미푸르)</p>
            <p><span>2021</span> 시체스국제영화제 오피셜 판타스틱-음악상(다니엘 루피), Carnet Jove-판타지장르 작품상(애나 릴리 아미푸르)</p>
        </div>
    </>
}

export default MainInfo;