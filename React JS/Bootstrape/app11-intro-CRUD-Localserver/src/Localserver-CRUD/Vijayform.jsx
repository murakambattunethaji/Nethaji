import React from "react";

const Vijayform = ({ handleChange, user, createUser, isEdit, updateUser }) => {
    return (
        <div className="col-8">
            <form>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.name}
                        name="name"
                        onChange={handleChange}
                    />
                </div>



                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        value={user.email}
                        name="email"
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                    date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        value={user.password}
                        name="date"
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                    paragraph
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={user.password}
                        name="paragraph"
                        onChange={handleChange}
                    />
                </div>


                {isEdit ? (
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={updateUser}
                    >
                        Update User
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={createUser}
                    >
                        submit User
                    </button>
                )}
            </form>
        </div>
    );
};

export default Vijayform
