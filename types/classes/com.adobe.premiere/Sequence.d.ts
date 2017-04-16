/// <reference path="../../packages/com.adobe.premiere/references.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Sequence extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {Adobe.Premiere.TrackCollection}
			 * @readonly
			 */
			public readonly audioTracks: Adobe.Premiere.TrackCollection;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly end: string;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly frameSizeHorizontal: number;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly frameSizeVertical: number;
			/**
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly sequenceID: string;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly timebase: string;
			/**
			 * @type {Adobe.Premiere.TrackCollection}
			 * @readonly
			 */
			public readonly videoTracks: Adobe.Premiere.TrackCollection;
			/**
			 * @type {string}
			 * @readonly
			 */
			public readonly zeroPoint: string;
			/**
			 * @param {string} propertyID 
			 * @param {string} propertyValue 
			 * @returns {void}
			 */
			public attachCustomProperty(propertyID: string, propertyValue: string): void;
			/**
			 * @returns {void}
			 */
			public clone(): void;
			/**
			 * @param {number} seconds 
			 * @returns {void}
			 */
			public setInPoint(seconds: number): void;
			/**
			 * @param {number} seconds 
			 * @returns {void}
			 */
			public setOutPoint(seconds: number): void;
			/**
			 * @param {string} pos 
			 * @returns {void}
			 */
			public setPlayerPosition(pos: string): void;
		}
	}
}