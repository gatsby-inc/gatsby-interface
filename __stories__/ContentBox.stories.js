import React from "react"

import { storiesOf } from "@storybook/react"

import { ContentBox } from "../src/components/ContentBox"

storiesOf(`ContentBox`, module)
  .add(`TOGGLE (default) behaviour with a static button`, () => (
    <ContentBox>
      <ContentBox.Content variant="PRIMARY">
        This is a PRIMARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Button>Toggle</ContentBox.Button>
    </ContentBox>
  ))
  .add(`TOGGLE behaviour with buttons swap `, () => (
    <ContentBox>
      <ContentBox.Content variant="PRIMARY">
        This is a PRIMARY content of this ContentBox
        <ContentBox.Button>Show SECONDARY content</ContentBox.Button>
      </ContentBox.Content>
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
        <ContentBox.Button>Show PRIMARY content</ContentBox.Button>
      </ContentBox.Content>
    </ContentBox>
  ))
  .add(`UNFOLD behaviour with  a static button`, () => (
    <ContentBox behaviour="UNFOLD">
      <ContentBox.Content>
        This is a PRIMARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Button>Toggle</ContentBox.Button>
    </ContentBox>
  ))
  .add(`UNFOLD behaviour with buttons swap`, () => (
    <ContentBox behaviour="UNFOLD">
      <ContentBox.Content>
        This is a PRIMARY content of this ContentBox
        <ContentBox.Button behaviour="HIDE">Unfold</ContentBox.Button>
      </ContentBox.Content>
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
        <ContentBox.Button>Fold</ContentBox.Button>
      </ContentBox.Content>
    </ContentBox>
  ))
  .add(`UNFOLD behaviour with no PRIMARY content`, () => (
    <ContentBox behaviour="UNFOLD">
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Button>Toggle</ContentBox.Button>
    </ContentBox>
  ))
