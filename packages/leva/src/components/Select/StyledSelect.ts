import { styled } from '../../styles'

export const SelectContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '> svg': {
    pointerEvents: 'none',
    position: 'absolute',
    right: '$rowH',
  },
})

export const StyledSelect = styled('select', {
  width: '100%',
  appearance: 'none',
  outline: 'none',
  display: 'block',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  height: '$rowHeight',
  backgroundColor: '$elevation3',
  color: '$textEmphasized',
  borderStyle: 'none',
  borderRadius: '$sm',
  padding: '0 $input',
  cursor: 'pointer',
  transition: 'border',
  '&:hover': {
    borderColor: '$inputHoverBorder',
  },
})