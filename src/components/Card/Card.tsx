/**
 * Material.App - Information Card component.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

import * as React from "react";
import {ICardProps} from "./Card.interface";
import "./Card.css";

const Card: React.FunctionComponent<ICardProps> = (props) => {
    document.handler.log("Card.render()");
    return (
      <div className={"card" + (props.plain ? " card-plain" : "")}>
        <div className={"header" + (props.hCenter ? " text-center" : "")}>
          <h4 className="title">{props.title}</h4>
          <p className="category">{props.category}</p>
        </div>
        <div
          className={
            "content" +
            (props.ctAllIcons ? " all-icons" : "") +
            (props.ctTableFullWidth ? " table-full-width" : "") +
            (props.ctTableResponsive ? " table-responsive" : "") +
            (props.ctTableUpgrade ? " table-upgrade" : "") +
            (props.className? " "+props.className : "")
          }
        >
          {props.content}
          <div className="footer">
            {props.legend}
            {props.stats != null ? <hr /> : ""}
            <div className="stats">
              <i className={props.statsIcon} /> {props.stats}
            </div>
          </div>
        </div>
      </div>
    );
}

export {Card};
