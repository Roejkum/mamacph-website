import React from 'react'
import PropTypes from 'prop-types'
import { CasesPostTemplate } from '../../templates/cases-post'

const CasesPostPreview = ({ entry, widgetFor }) => (
  <CasesPostTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CasesPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CasesPostPreview
