import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateBusinessProfile } from '../../../actions/profile';

const BusinessProfileForm = ({ updateBusinessProfile, history }) => {
    const [formData, setFormData] = useState({
        website: '',
        email: '',
        phone: '',
        creatorReq: '',
        address: '',
        description: '',
        helpReq: '',
    });

    const { website, email, phone, creatorReq, address, description, helpReq } =
        formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        updateBusinessProfile(formData, history);
    };

    return (
        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Business Details</h4>
                            <p class="card-description">
                                Tell us about yourself!!!
                            </p>
                            <form
                                class="forms-sample"
                                onSubmit={(e) => onSubmit(e)}
                            >
                                <div class="form-group">
                                    <label htmlFor="exampleInputName1">
                                        Company Website
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputName1"
                                        placeholder="Website"
                                        name="website"
                                        value={website}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                                {/* <div class="form-group">
                                    <label htmlFor="exampleInputEmail3">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail3"
                                        placeholder="Email"
                                    />
                                </div> */}
                                <p class="card-description">Contact Details</p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">
                                                Email address
                                            </label>
                                            <div class="col-sm-9">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) =>
                                                        onChange(e)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">
                                                Contact no.
                                            </label>
                                            <div class="col-sm-9">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        onChange(e)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div class="form-group">
                                    <label htmlFor="exampleInputPassword4">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="exampleInputPassword4"
                                        placeholder="Password"
                                    />
                                </div> */}
                                <div class="form-group">
                                    <label htmlFor="exampleSelectGender">
                                        Type of creator you want
                                    </label>
                                    <select
                                        class="form-control"
                                        id="exampleSelectGender"
                                        name="creatorReq"
                                        value={creatorReq}
                                        onChange={(e) => onChange(e)}
                                    >
                                        <option
                                            value=""
                                            selected
                                            disabled
                                            hidden
                                        >
                                            Creator Type
                                        </option>
                                        <option value="Youtuber">
                                            Youtuber
                                        </option>
                                        <option value="Soical Media Influencer">
                                            Soical Media Influencer
                                        </option>
                                        <option value="Website content writer">
                                            Website content writer
                                        </option>
                                        <option value="Blogger">Blogger</option>
                                        <option value="Video Creators">
                                            Video Creators
                                        </option>
                                        <option value="Photographer">
                                            Photographer
                                        </option>
                                    </select>
                                </div>
                                {/* <div class="form-group">
                                    <label>File upload</label>
                                    <input
                                        type="file"
                                        name="img[]"
                                        class="file-upload-default"
                                    />
                                    <div class="input-group col-xs-12">
                                        <input
                                            type="text"
                                            class="form-control file-upload-info"
                                            disabled
                                            placeholder="Upload Image"
                                        />
                                        <span class="input-group-append">
                                            <button
                                                class="file-upload-browse btn btn-primary"
                                                type="button"
                                            >
                                                Upload
                                            </button>
                                        </span>
                                    </div>
                                </div> */}
                                <div class="form-group">
                                    <label htmlFor="exampleInputCity1">
                                        Organization based on
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputCity1"
                                        placeholder="Address"
                                        name="address"
                                        value={address}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="exampleTextarea1">
                                        What you do?
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="exampleTextarea1"
                                        rows="4"
                                        name="description"
                                        value={description}
                                        onChange={(e) => onChange(e)}
                                    ></textarea>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="exampleTextarea2">
                                        How creators can help you?
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="exampleTextarea2"
                                        rows="4"
                                        name="helpReq"
                                        value={helpReq}
                                        onChange={(e) => onChange(e)}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    class="btn btn-primary mr-2"
                                >
                                    Submit
                                </button>
                                <button class="btn btn-light">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { updateBusinessProfile })(
    withRouter(BusinessProfileForm)
);
