'use strict';

module.exports = (io, app) => {
	let allRooms = app.locals.chatrooms;

	allRooms.push({
		room: 'Good Food',
		roomID: '0001',
		users: []
	});

	allRooms.push({
		room: 'Good Conversation',
		roomID: '0002',
		users: []
	});

	io.of('/roomslist').on('connection', socket => {
		socket.on('getChatrooms', () => {
			socket.emit('chatRoomsList', JSON.stringify(allRooms));
		});
	});
}