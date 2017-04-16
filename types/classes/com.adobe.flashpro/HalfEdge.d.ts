/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * Directed side of an edge. An edge has two half edges. You 
		 * can transverse the contours by walking around these half 
		 * edges. They are ordered. One half edge represents the one 
		 * side of the edge, the other half edge represents the other 
		 * side.
		 */
		class HalfEdge extends Adobe.Csawlib.CSHostObject {
			/**
			 * a unique identifier for the half edge.
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * either 0 or 1 corresponding to the index for this halfEdge 
			 * in the parent edge.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * Get the edge object for the halfEdge
			 * @returns {Adobe.Flashpro.Edge}
			 */
			public getEdge(): Adobe.Flashpro.Edge;
			/**
			 * Get the next half edge on the current contour. NOTE: 
			 * halfEdges have a direction and a sequence order, edges do 
			 * not.
			 * @returns {Adobe.Flashpro.HalfEdge}
			 */
			public getNext(): Adobe.Flashpro.HalfEdge;
			/**
			 * Get the halfEdge object on the other side of the edge.
			 * @returns {Adobe.Flashpro.HalfEdge}
			 */
			public getOppositeHalfEdge(): Adobe.Flashpro.HalfEdge;
			/**
			 * Get the preceding halfEdge on the current contour. NOTE: 
			 * halfEdges have a direction and a sequence order, edges do 
			 * not.
			 * @returns {Adobe.Flashpro.HalfEdge}
			 */
			public getPrev(): Adobe.Flashpro.HalfEdge;
			/**
			 * get the vertex at the head of the halfEdge object.
			 * @returns {Adobe.Flashpro.Vertex}
			 */
			public getVertex(): Adobe.Flashpro.Vertex;
		}
	}
}