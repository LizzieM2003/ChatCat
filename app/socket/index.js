'use strict';

const h = require('../helpers');

module.exports = (io, app) => {
	let allRooms = app.locals.chatrooms;

	

	io.of('/roomslist').on('connection', socket => {
		socket.on('getChatrooms', () => {
			socket.emit('chatRoomsList', JSON.stringify(allRooms));
		});
		socket.on('createNewRoom', newRoom => {
			// check to see if a room with the same title exists or not
			// if not, create one and broadcast it to everyone
			if (!h.findRoomByName(allRooms, newRoom)) {
				allRooms.push({
					room: newRoom,
					roomID: h.randomHex(),
					users: []
				});
			}

			// Emit an updated list to the creator
			socket.emit('chatRoomsList', JSON.stringify(allRooms));
			// Emit an updated list to everyone connected to the rooms page
			socket.broadcast.emit('chatRoomsList', JSON.stringify(allRooms));
		});
	});
}