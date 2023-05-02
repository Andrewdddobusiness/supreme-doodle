import React from "react";
import { GraphView, Node, Edge } from "react-digraph";

const NODE_KEY = "id";

const nodes = [
  { id: 1, title: "Node 1", x: 50, y: 50 },
  { id: 2, title: "Node 2", x: 250, y: 50 },
  { id: 3, title: "Node 3", x: 50, y: 150 },
  { id: 4, title: "Node 4", x: 250, y: 150 },
];

const edges = [
  { source: 1, target: 2, type: "emptyEdge" },
  { source: 2, target: 4, type: "emptyEdge" },
  { source: 3, target: 4, type: "emptyEdge" },
];

export default function TransactionDigraph(transactions) {
  const NodeTypes = {};
  const NodeSubtypes = {};
  const EdgeTypes = {
    emptyEdge: {
      shapeId: "#emptyEdge",
      shape: (
        <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
          <circle cx="25" cy="25" r="8" fill="currentColor">
            {" "}
          </circle>
        </symbol>
      ),
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <GraphView
        nodeKey={NODE_KEY}
        nodes={nodes}
        edges={edges}
        selected={{}}
        nodeTypes={NodeTypes}
        nodeSubtypes={NodeSubtypes}
        edgeTypes={EdgeTypes}
      />
    </div>
  );
}
