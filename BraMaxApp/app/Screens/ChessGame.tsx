import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ChessGame = () => {
  // Define the chess pieces and their initial positions
  const chessBoard = [
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chess Game</Text>
      <View style={styles.board}>
        {chessBoard.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((piece, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[
                  styles.cell,
                  {
                    backgroundColor: (rowIndex + colIndex) % 2 === 0 ? '#fff' : '#ddd', // Alternating colors
                  },
                ]}
              >
                <Text style={styles.piece}>{piece}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ChessGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark text color
    marginBottom: 20,
  },
  board: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 5,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 40, // Width of each cell
    height: 40, // Height of each cell
    justifyContent: 'center',
    alignItems: 'center',
  },
  piece: {
    fontSize: 24, // Font size for the chess pieces
  },
});
