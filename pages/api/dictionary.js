'use strict'

import syllableDictionary from '../../backend/extractDictionary'

export default function getDictionaryObject(req, res) {
    res.status(200).send(syllableDictionary);
  }
  