import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){

    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
                <RepositoryItem 
                repository="unform" 
                description="Forms in React" 
                link=""/>
                <RepositoryItem/>
                <RepositoryItem/>
                <RepositoryItem/>
            </ul>
        </section>
    )
}