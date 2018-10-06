import React from 'react';

export const conditionalLogic = (component, props) => {
  if (props.item.dependantOn === null) {
    return (
      <div>
        {component}
      </div>
    )
  } else {
    return (
      <div>
        { props.values && props.values[props.item.dependantOn] == props.item.triggerValue
          ? component
          : null
        }
      </div>
    );
  }
}