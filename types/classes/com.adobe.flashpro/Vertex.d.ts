/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * The Vertex object is the part of the shape data structure 
		 * that holds the corordinate data.
		 */
		class Vertex extends Adobe.Csawlib.CSHostObject {
			/**
			 * the x location of the vertex in pixels.
			 * @type {number}
			 * @readonly
			 */
			public readonly x: number;
			/**
			 * the y location of the vertex in pixels.
			 * @type {number}
			 * @readonly
			 */
			public readonly y: number;
			/**
			 * Get a halfEdge that shares this vertex
			 * @returns {Adobe.Flashpro.HalfEdge}
			 */
			public getHalfEdge(): Adobe.Flashpro.HalfEdge;
			/**
			 * set the location of the vertex.
			 * @param {number} x x,y
			 * @param {number} y 
			 * @returns {void}
			 */
			public setLocation(x: number, y: number): void;
		}
	}
}