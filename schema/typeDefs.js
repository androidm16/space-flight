const { gql } = require ("apollo-server-core");

const typeDefs = gql`
    type planet {
        id: Int!
        name: String!
        code: String!
        spaceCenter: [spaceCenter]!
    },

    type spaceCenter {
        id: Int!
        uid: String!
        name: String!
        description: String!
        latitude: Float!
        longitude: Float!
        planet_code: String!
    },

    type flights {
        id: Int!
        code: String!
        seat_count: Int!
    },

    type booking {
        id: Int!
        seat_count: Int!
        email: String!
    },

    # Queries
    type Query {
        planet: [planet!]!
        spaceCenter: [spaceCenter!]!
        flights: [flights!]!
        booking: [booking!]!


    },
    query planet {
    planet {
      id
      name
      code
      spaceCenter(limit: 3) {
        id
      }
    }
  },

     query spaceCenter {
    spaceCenter {
      pagination {
        total
        page
        pageSize
      }
      nodes {
        id
        uid
        name
        description
        latitude
        longitude
        planet {
          id
          name
          code
        }
      }
    }
  },

     query spaceCenter {
    spaceCenter(uid: "da9c2dee-3b38-4d21-b911-083599c05dad") {
      id
      uid
      name
      description
      planet {
        id
        name
        code
      }
    }
  },

  query flights {
    flights(pageSize: 1, page: 3) {
      pagination {
        total
        page
        pageSize
      }
      nodes {
        id
        code
        launchSite {
          name
          planet {
            name
          }
        }
        landingSite {
          name
          planet {
            name
          }
        }
      }
    }
  },

  query flights {
    flight(id: 1) {
      id
      code
      launchSite {
        name
        planet {
          name
        }
      }
      landingSite {
        name
        planet {
          name
        }
      }
    }
  },

  query booking {
    bookings(email: "test@strapi.io", page: 1) {
      pagination {
        total
        page
        pageSize
      }
      nodes {
        id
        seatCount
        flight {
          code
        }
      }
    }
  },

  query booking {
    booking(id: 1) {
      id
      flight {
        code
        landingSite {
          uid
        }
      }
    }
  },

    # Mutations
 mutation scheduleFlight($flight: ScheduleFlightInput!) {
    scheduleFlight(flightInfo: $flight) {
      id
      code
      launchSite {
        name
        planet {
          name
        }
      }
      landingSite {
        name
        planet {
          name
        }
      }
      availableSeats
      seatCount
      departureAt
    }
  },

  mutation book {
    bookFlight(
      bookingInfo: { seatCount: 10, flightId: 1, email: "test@strapi.io" }
    ) {
      id
      flight {
        code
        availableSeats
        seatCount
      }
      email
    }
  },


`

module.exports = {
    typeDefs
}