'use strict'

import authorInDictionary from '../../backend/matchAuthorAndDictionary'

export default function getAuthorObject(req, res) {
    res.status(200).send(authorInDictionary);
  }
  