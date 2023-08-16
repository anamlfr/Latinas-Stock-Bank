import "./DashboardStyles.css"

export function DashboardPage() {


    return (
        <div className="dashboard">

            <h1>Cambiar PIN</h1>
            <form className="formulario" >
                    <input
                        className="data"
                        type="password"
                        placeholder="Ingrese PIN actual"

                    />
                <br />
                    <input
                        className="data"
                        type="password"
                        placeholder="Ingrese nuevo PIN"

                    />
                <br />
                <button type="submit">Cambiar PIN</button>
            </form>


        </div>
    )
}
