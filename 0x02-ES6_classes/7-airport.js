#!/usr/bin/nodes

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    // this will change the default string description to [object code]
    // the symbol.tostringtag is known symbol to do this
    return this._code;
  }
}
