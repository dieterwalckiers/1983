import * as React from "react";
import "./logo.css";

export interface ILogoProps {}

export function Logo(props: ILogoProps) {
    return (
        <p className="logo-wrapper">
            <label className="logo">1983</label>
        </p>
    );
}
