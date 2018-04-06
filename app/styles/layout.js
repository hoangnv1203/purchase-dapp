import { COLOR, FONT_SIZE } from 'styles/constants'
import { fontStyle } from 'styles/global'

export const columnLayout = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  column: {
    flex: 1,
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '15px',
    marginTop: '100px'
  }
}

export const appLayout = {
  wrapper: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 1
  }
}

export const widgetLayout = {
  wrapper: {
    // borderLeft: `2px solid ${COLOR.lightGray}`,
    // padding: '15px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '5px',
    borderBottom: `1px solid ${COLOR.lightGray}`
  },
  controls: {
    marginLeft: 'auto'
  },
  button: {
    display: 'inline-block',
    marginLeft: '5px',
    cursor: 'pointer'
  },
  title: {
    color: COLOR.darkGray,
    fontWeight: 700
  },
  content: {
    marginTop: '15px',
    fontSize: FONT_SIZE.smallx
  }
}

export const modalLayout = {
  portal: {
    zIndex: 302,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch'
  },
  overlay: {
    position: 'fixed',
    background: COLOR.light.fade(.2),
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  wrapper: {
    ...fontStyle,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: '50px',
    maxWidth: '900px',
    width: '100%',
    display: 'inline-block',
    left: 0,
    right: 0
  },
  content: {
    flex: 1,
    marginLeft: '15px',
    marginRight: '15px',
    marginBottom: '15px',
    padding: '15px',
    border: `1px solid ${COLOR.darkGray}`,
    boxShadow: `0 0 20px ${COLOR.darkGray}`,
    background: COLOR.light
  },
  header: {
    marginBottom: '5px',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}
