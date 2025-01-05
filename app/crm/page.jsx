"use client";
import dynamic from "next/dynamic";
import NavCRMPreloader from "@/app/crm/navPreloader";
const NavCRM = dynamic(() => import("@/app/crm/nav"), { ssr: false,loading: () => <NavCRMPreloader/>});

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
                            <th className="text-end" scope="col">Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="align-middle" scope="row">1</th>
                            <td className="align-middle">Омлет с пепперони</td>
                            <td className="align-middle">Otto</td>
                            <td className="align-middle d-flex justify-content-end">
                                <button type="button" style={{fontSize:12}} className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#CardEditModal">
                                    <i className="bi bi-pencil-fill"></i> Редактировать
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default MainCRM;