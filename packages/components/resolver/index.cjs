const TetapComponents = ({ importStyle }) => {
  /**
   * @param {string} componentName
   */
  return (componentName) => {
    if (componentName.startsWith('Tetap')) {
      const component = componentName.replace('Tetap', '')
      return {
        name: component,
        as: componentName,
        from: '@tetap/components',
        sideEffects: importStyle ? '@tetap/components/style.css' : null
      }
    }
  }
}

exports.TetapComponents = TetapComponents
