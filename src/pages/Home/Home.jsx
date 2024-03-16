import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import { toast } from 'react-toastify';

function Home() {
    const [products, setProducts] = useState([]);
    const [openFilter, setOpenFilter] = useState(true)
    const [productType, setProductType] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const allProducts = await axios.get('https://fakestoreapi.com/products');
            setProducts(allProducts.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData()
    },[])

    const openHandler = ()=>{
        setOpenFilter(!openFilter)
    }
    const collapseHandler = (e)=>{
      e.target.classList.toggle('collapse');
  }
  return (
    <section className='home'>
      <div className="home-text">
        <h1>discover our products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti totam exercitationem laborum, ullam molestiae dolor minima </p>
      </div>
        <div className="product-header">
          <div>
          <p>3427 items</p>
            <button onClick={openHandler} className='filterOpener'><i class={`bi bi-chevron-double-${openFilter?'left':'right'}`}></i>{openFilter?'hide filter' : 'show filter'}</button>
          </div>
          <div className="productType">
          <select name="" id="">
              <option value="">recomended</option>
              <option value="">newest first</option>
              <option value="">popular</option>
              <option value="">price: hight to low</option>
              <option value="">price low to hight</option>
            </select>

          </div>
        </div>
        <div className="sm-hider">
        <div className="product-header-sm">
          <button onClick={openHandler}>FILTER</button>
          <div className="devider"></div>
          <select name="" id="">
              <option value="">recomended</option>
              <option value="">newest first</option>
              <option value="">popular</option>
              <option value="">price: hight to low</option>
              <option value="">price low to hight</option>
            </select>
        </div>
        </div>
       
     <div className="products-container">
     <div className={`filter ${openFilter?'open' : 'close'}`}>

      <label htmlFor="customizble">
        <input type="checkbox" name="customizble" id="customizble" />
        customizble
      </label>
      <hr />

      <div className="collapser">
       <div className="collapse-item">
       <b className="collapse-button" onClick={(e)=>{collapseHandler(e)}}>IDEAL FOR <i class="bi bi-chevron-down"></i></b>
       <p>All</p>
        <div className="collapse-body">
       
          <a href="">unSelect all</a>

          <ul>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            Men
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            Women
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            Boby & Kids
          </label>
            </li>
          </ul>

        </div>
       </div>

       <div className="collapse-item">
       <b className="collapse-button" onClick={(e)=>{collapseHandler(e)}}>OCCASION <i class="bi bi-chevron-down"></i></b>
       <p>All</p>
        <div className="collapse-body">
       
          <a href="">unSelect all</a>

          <ul>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            Men
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            Women
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            Boby & Kids
          </label>
            </li>
          </ul>

        </div>
       </div>


       <div className="collapse-item">
       <b className="collapse-button" onClick={(e)=>{collapseHandler(e)}}>WORK<i class="bi bi-chevron-down"></i></b>
       <p>All</p>
        <div className="collapse-body">
       
          <a href="">unSelect all</a>

          <ul>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            work1
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            work2
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            work3
          </label>
            </li>
          </ul>

        </div>
       </div>


       <div className="collapse-item">
       <b className="collapse-button" onClick={(e)=>{collapseHandler(e)}}>FABRIC<i class="bi bi-chevron-down"></i></b>
       <p>All</p>
        <div className="collapse-body">
       
          <a href="">unSelect all</a>

          <ul>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            Fabric1
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            Fabric2
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            Fabric3
          </label>
            </li>
          </ul>

        </div>
       </div>


       <div className="collapse-item">
       <b className="collapse-button" onClick={(e)=>{collapseHandler(e)}}>SEGMENT <i class="bi bi-chevron-down"></i></b>
       <p>All</p>
        <div className="collapse-body">
       
          <a href="">unSelect all</a>

          <ul>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            segment1
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            segment2
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            segment3
          </label>
            </li>
          </ul>

        </div>
       </div>


       <div className="collapse-item">
       <b className="collapse-button" onClick={(e)=>{collapseHandler(e)}}>SUITABLE FOR<i class="bi bi-chevron-down"></i></b>
       <p>All</p>
        <div className="collapse-body">
       
          <a href="">unSelect all</a>

          <ul>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            suitable1
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            suitable2
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            suitable3
          </label>
            </li>
          </ul>

        </div>
       </div>

       <div className="collapse-item">
       <b className="collapse-button" onClick={(e)=>{collapseHandler(e)}}>RAW MATERIALS<i class="bi bi-chevron-down"></i></b>
       <p>All</p>
        <div className="collapse-body">
       
          <a href="">unSelect all</a>

          <ul>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            material1
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            material2
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            material3
          </label>
            </li>
          </ul>

        </div>
       </div>

       <div className="collapse-item">
       <b className="collapse-button" onClick={(e)=>{collapseHandler(e)}}>PATTREN<i class="bi bi-chevron-down"></i></b>
       <p>All</p>
        <div className="collapse-body">
       
          <a href="">unSelect all</a>

          <ul>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            pattren1
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            pattren2
          </label>
            </li>
            <li>
            <label htmlFor="customizble">
            <input type="checkbox" name="customizble" id="customizble" />
            pattren3
          </label>
            </li>
          </ul>

        </div>
       </div>
       <hr />


       
      </div>
      </div>
<div className="products">
  {
      products.map((item, index)=>(
          <div className="product-card">
            <div className="product-card-header">
            <img src={item.image} alt={item.title} />
            </div>
            <div className="product-card-body">
            <h4 className="productname">{item.title}</h4>
            </div>
              <div className="product-card-footer">
                  <small><a href="">Sign in</a> or create account to see pricing</small>
                  <i className='bi bi-heart'></i>
              </div>
          </div>
      ))
  }
</div>
     </div>
    </section>
  )
}

export default Home
