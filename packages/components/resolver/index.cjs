const TetapComponents = () => {
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
        sideEffects: '@tetap/components/style.css'
      }
    }
  }
}

exports.TetapComponents = TetapComponents
