/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  com: {
    nested: {
      perfdog: {
        nested: {
          proto: {
            nested: {
              ATraceData: {
                fields: {
                  startTime: {
                    type: "int64",
                    id: 1
                  },
                  duration: {
                    type: "int32",
                    id: 2
                  },
                  level: {
                    type: "int32",
                    id: 3
                  },
                  name: {
                    type: "string",
                    id: 4
                  }
                }
              },
              ATraceDataList: {
                fields: {
                  tid: {
                    type: "int32",
                    id: 1
                  },
                  threadName: {
                    type: "string",
                    id: 2
                  },
                  data: {
                    rule: "repeated",
                    type: "ATraceData",
                    id: 3
                  }
                }
              },
              ScheduleData: {
                fields: {
                  startTime: {
                    type: "int64",
                    id: 1
                  },
                  duration: {
                    type: "int32",
                    id: 2
                  },
                  level: {
                    type: "int32",
                    id: 3
                  },
                  name: {
                    type: "string",
                    id: 4
                  },
                  tid: {
                    type: "int32",
                    id: 5
                  },
                  state: {
                    type: "int64",
                    id: 6
                  }
                }
              },
              ScheduleDataList: {
                fields: {
                  cpu: {
                    type: "int32",
                    id: 1
                  },
                  data: {
                    rule: "repeated",
                    type: "ScheduleData",
                    id: 2
                  }
                }
              },
              TraceDataTest: {
                oneofs: {
                  value: {
                    oneof: [
                      "aTrace",
                      "cpuSchedule"
                    ]
                  }
                },
                fields: {
                  aTrace: {
                    type: "ATraceDataList",
                    id: 1
                  },
                  cpuSchedule: {
                    type: "ScheduleDataList",
                    id: 2
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
