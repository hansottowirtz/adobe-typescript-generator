/// <reference path="../../packages/com.adobe.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace Premiere {
		class Sequence extends Adobe.Csawlib.CSHostObject {
			public readonly audioTracks: Adobe.Premiere.TrackCollection;
			public readonly end: string;
			public readonly frameSizeHorizontal: number;
			public readonly frameSizeVertical: number;
			public readonly id: number;
			public readonly name: string;
			public readonly sequenceID: string;
			public readonly timebase: string;
			public readonly videoTracks: Adobe.Premiere.TrackCollection;
			public readonly zeroPoint: string;
			/**
			 * @param {string} propertyID 
			 * @param {string} propertyValue 
			 */
			public attachCustomProperty(propertyID: string, propertyValue: string): void;
			public clone(): void;
			/**
			 * @param {number} seconds 
			 */
			public setInPoint(seconds: number): void;
			/**
			 * @param {number} seconds 
			 */
			public setOutPoint(seconds: number): void;
			/**
			 * @param {string} pos 
			 */
			public setPlayerPosition(pos: string): void;
		}
	}
}