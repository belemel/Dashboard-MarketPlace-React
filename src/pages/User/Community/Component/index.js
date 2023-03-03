import { BsPersonSquare } from "react-icons/bs"
import { AiOutlineFall } from "react-icons/ai"
import './index.css'

import person1 from '../../../../assets/img/person-1.svg'

export default function MyCommunity() {
    return (
          <div className="__contentMyCommunity">
            
              <div className="__indicationsCommunity">
                <div className="__totalIndications">
                   <div className="_totalIndications">
                       <div className="__contentIndications">
                          <div className="_divisionCardIndication">
                            <div className="card-icon-indi">
                            <div className="_totalCardIndicationTitle">
                              <h1>Total de Indicações</h1>
                              <h1>11</h1>
                            </div>
                            <div className="__iconUserIndi">
                               <BsPersonSquare color={'#2CB67D'} size={30}/>
                            </div>
                            </div>


                            <div className="_percentageIndication">
                    <div className="_percentage">
                        <div className="_iconPercentage">
                        <div>
                          <AiOutlineFall color={'#D9534F'} />
                        </div>
                        <h1>127%</h1>
                        </div>
                       
                        <h2>Que o mês passado</h2>
                    </div>
                </div>
                          </div>
                          <div className="_divisionCardIndication">
                            <div className="card-icon-indi">
                            <div className="_totalCardIndicationTitle">
                              <h1>Total de Indicações</h1>
                              <h1>11</h1>
                            </div>
                            <div className="__iconUserIndi">
                               <BsPersonSquare color={'#2CB67D'} size={30}/>
                            </div>
                            </div>


                            <div className="_percentageIndication">
                    <div className="_percentage">
                        <div className="_iconPercentage">
                        <div>
                          <AiOutlineFall color={'#D9534F'} />
                        </div>
                        <h1>127%</h1>
                        </div>
                       
                        <h2>Que o mês passado</h2>
                    </div>
                </div>
                          </div>
                          <div className="_divisionCardIndication">
                            <div className="card-icon-indi">
                            <div className="_totalCardIndicationTitle">
                              <h1>Total de Indicações</h1>
                              <h1>11</h1>
                            </div>
                            <div className="__iconUserIndi">
                               <BsPersonSquare color={'#2CB67D'} size={30}/>
                            </div>
                            </div>

                             <div className="_percentageIndication">
                    <div className="_percentage">
                        <div className="_iconPercentage">
                        <div>
                          <AiOutlineFall color={'#D9534F'} />
                        </div>
                        <h1>127%</h1>
                        </div>
                       
                        <h2>Que o mês passado</h2>
                    </div>
                             </div>
                          </div>
                       </div>
                   </div>
                  
                   <div className="_totalIndications">
                       <div className="__contentIndications">
                          <div className="_divisionCardIndication">
                            <div className="card-icon-indi">
                            <div className="_totalCardIndicationTitle">
                              <h1>Total de Indicações</h1>
                              <h1>11</h1>
                            </div>
                            <div className="__iconUserIndi">
                               <BsPersonSquare color={'#2CB67D'} size={30}/>
                            </div>
                            </div>


                            <div className="_percentageIndication">
                    <div className="_percentage">
                        <div className="_iconPercentage">
                        <div>
                          <AiOutlineFall color={'#D9534F'} />
                        </div>
                        <h1>127%</h1>
                        </div>
                       
                        <h2>Que o mês passado</h2>
                    </div>
                </div>
                          </div>
                          <div className="_divisionCardIndication">
                            <div className="card-icon-indi">
                            <div className="_totalCardIndicationTitle">
                              <h1>Total de Indicações</h1>
                              <h1>11</h1>
                            </div>
                            <div className="__iconUserIndi">
                               <BsPersonSquare color={'#2CB67D'} size={30}/>
                            </div>
                            </div>


                            <div className="_percentageIndication">
                    <div className="_percentage">
                        <div className="_iconPercentage">
                        <div>
                          <AiOutlineFall color={'#D9534F'} />
                        </div>
                        <h1>127%</h1>
                        </div>
                       
                        <h2>Que o mês passado</h2>
                    </div>
                </div>
                          </div>
                          <div className="_divisionCardIndication">
                            <div className="card-icon-indi">
                            <div className="_totalCardIndicationTitle">
                              <h1>Total de Indicações</h1>
                              <h1>11</h1>
                            </div>
                            <div className="__iconUserIndi">
                               <BsPersonSquare color={'#2CB67D'} size={30}/>
                            </div>
                            </div>

                             <div className="_percentageIndication">
                    <div className="_percentage">
                        <div className="_iconPercentage">
                        <div>
                          <AiOutlineFall color={'#D9534F'} />
                        </div>
                        <h1>127%</h1>
                        </div>
                       
                        <h2>Que o mês passado</h2>
                    </div>
                             </div>
                          </div>
                       </div>
                   </div>
                </div>


                <div className="__searchCommunity">
                    <input type="text" className="_searchCommunity" placeholder="Pesquisar..."></input>
                </div>
                <div className="__usersIndications">
                <table className="__tableIndications">
                      <thead>
                        <tr className="__titleTableIndications">
                          <td><label><input className="checkmark" checked="checked"></input></label></td>
                          <th className="_titleTableIndications">Usuário</th>
                          <th className="_titleTableIndications">Nome</th>
                          <th className="_titleTableIndications">Email</th> 
                          <th className="_titleTableIndications">Telefone</th>
                          <th className="_titleTableIndications">Cashback</th>
                          <th className="_titleTableIndications">Situação</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        <td><div className="checkmark"></div></td>
                          <td className="__imagePerson"><img src={person1} /></td>
                          <td className="__nameTableIndications">Lindsey Stroud</td>
                          <td className="__emailTableIndications">LindseyStroud@hotmail.com</td>
                          <td className="__celTableIndications">(11)00000-0000</td>
                          <td className="__cashbackTableIndications">Bonus</td>
                          <td className="__approvedTableIndications">Aprovado</td>
                        </tr>
                        <tr>
                        <td><div className="checkmark"></div></td>
                          <td className="__imagePerson"><img src={person1} /></td>
                          <td className="__nameTableIndications">Lindsey Stroud</td>
                          <td className="__emailTableIndications">LindseyStroud@hotmail.com</td>
                          <td className="__celTableIndications">(11)00000-0000</td>
                          <td className="__cashbackTableIndications">Bonus</td>
                          <td className="__approvedTableIndications">Aprovado</td>
                        </tr>
                        <tr>
                        <td><div className="checkmark"></div></td>
                          <td className="__imagePerson"><img src={person1} /></td>
                          <td className="__nameTableIndications">Lindsey Stroud</td>
                          <td className="__emailTableIndications">LindseyStroud@hotmail.com</td>
                          <td className="__celTableIndications">(11)00000-0000</td>
                          <td className="__cashbackTableIndications">Bonus</td>
                          <td className="__approvedTableIndications">Aprovado</td>
                        </tr>
                        <tr>
                        <td><div className="checkmark"></div></td>
                          <td className="__imagePerson"><img src={person1} /></td>
                          <td className="__nameTableIndications">Lindsey Stroud</td>
                          <td className="__emailTableIndications">LindseyStroud@hotmail.com</td>
                          <td className="__celTableIndications">(11)00000-0000</td>
                          <td className="__cashbackTableIndications">Bonus</td>
                          <td className="__approvedTableIndications">Aprovado</td>
                        </tr>
                        <tr>
                        <td><div className="checkmark"></div></td>
                          <td className="__imagePerson"><img src={person1} /></td>
                          <td className="__nameTableIndications">Lindsey Stroud</td>
                          <td className="__emailTableIndications">LindseyStroud@hotmail.com</td>
                          <td className="__celTableIndications">(11)00000-0000</td>
                          <td className="__cashbackTableIndications">Bonus</td>
                          <td className="__approvedTableIndications">Aprovado</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>

              <div className="__totalEarnings">

              </div>
          </div>
    )
}