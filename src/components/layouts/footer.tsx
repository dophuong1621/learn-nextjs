import React, { Component } from 'react';
import Link from 'next/link';

class FooterComponent extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="header">
                    <div className="col-1">

                        <div className="menu">
                            <div>
                                    <Link href="/User">Users</Link>
                            </div>
                            <div>
                                <Link href="/nonUser">Non Users</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
    export default FooterComponent