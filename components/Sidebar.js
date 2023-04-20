import { useState} from "react";
import Link from 'next/link'

export default function Sidebar() {
  const [search, setSearch]= useState()
  function findSerach(value) {
   
    setSearch(value.target.value)
  }
 
  return (
    <div>

      <div className="card mb-4">
        <div className="card-header">Buscar artículo</div>
        <div className="card-body">
          <div className="input-group">
            <input onChange={findSerach} className="form-control" type="text" placeholder="Ingresa el titulo o palabra del artículo" aria-label="Ingresa el titulo o palabra del artículo" aria-describedby="button-search" />
            <Link href={{ pathname: '/Search', query: { q: search?.toLowerCase() } }}> 
              <a className="btn btn-primary" id="button-search">Go!</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}