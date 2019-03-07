import CMS from 'netlify-cms'
import CasesPostPreview from './preview-templates/CasesPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('cases-post', CasesPostPreview)
