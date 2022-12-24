export const commands = ['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01']
export const result = [14, 10, 0, 0, 0, 0, 0, 0]

export const commands1 = ['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01']
export const result1 = [0, 254, 0, 0, 0, 0, 0, 0]

export const commands2 = ['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06']
export const result2 = [0, 10, 0, 0, 0, 0, 1, 0]

export const commands3 = ['MOV 10,V00', 'MOV V00,V01', 'MOV V01,V02', 'MOV V02,V03', 'MOV V03,V04']
export const result3 = [10, 10, 10, 10, 10, 0, 0, 0]
