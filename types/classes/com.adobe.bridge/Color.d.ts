/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Color extends Adobe.Csawlib.CSHostObject {
			/**
			 * Degree of opacity when the color is composited.
			 * @type {number}
			 */
			public alpha: number;
			/**
			 * Blue component value.
			 * @type {number}
			 */
			public blue: number;
			/**
			 * Green component value.
			 * @type {number}
			 */
			public green: number;
			/**
			 * The color expressed as a 32-bit ARGB value.
			 * @type {number}
			 */
			public number: number;
			/**
			 * Red component value.
			 * @type {number}
			 */
			public red: number;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Retrieves the hexadecimal value of this color, including the 
			 * alpha channel.
			 * @returns {string}
			 */
			public toString(): string;
		}
	}
}