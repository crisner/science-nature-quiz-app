import React, {Fragment} from 'react';
import Button from './Button';

const HomeScreen = (props: any) => (
  <Fragment>
    <h1>Test your knowledge on nature.</h1>
    <h2>Choose a level to begin.</h2>
    <Button onClick={props.onClick} color="blue" text="Easy" />
    <Button onClick={props.onClick} color="green" text="Medium" />
    <Button onClick={props.onClick} color="orange" text="Hard" />
  </Fragment>
)

export default HomeScreen;