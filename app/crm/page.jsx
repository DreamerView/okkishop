"use client";
import dynamic from "next/dynamic";

const NavCRM = dynamic(() => import("@/app/crm/nav"), { ssr: false });

const MainCRM = () => {
    return (
        <div>
            <NavCRM path="/" />
            <div className="table-responsive my-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Наименование</th>
                            <th scope="col">Категория</th>
                            <th scope="col">Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Омлет с пепперони</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default MainCRM;