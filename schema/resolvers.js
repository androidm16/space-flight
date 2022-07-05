const bookingSchema = require('../db/migrations/Models/Booking');
const _ = require('underscore');
const { planet } = require ('../schema/typeDefs')
const { spaceCenter } = require ('../schema/typeDefs')
const { flights } = require ('../schema/typeDefs')
const { booking } = require ('../schema/typeDefs')


const resolvers = {
    Query: {
        // Planet Resolvers
        planet() {
            return planet;
        },
        // planet: (parent, args) => {
        //         const id = args.id;
        //         const planet = _.find(spaceCenter, { id: Number(id) });
        //         return planet;
        //     },



            // Space Center resolvers
            spaceCenter() {
                return spaceCenter;
            },
            
            // Flights resolvers
            flights() {
                return flights;
            },

            // Booking resolvers
            booking() {
                return booking;
            }
        }
    };
    
    
    

    

module.exports = { resolvers };