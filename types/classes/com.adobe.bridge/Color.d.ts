/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Color extends Adobe.Csawlib.CSHostObject {
			/** Degree of opacity when the color is composited. */
			public alpha: number;
			/** Blue component value. */
			public blue: number;
			/** Green component value. */
			public green: number;
			/** The color expressed as a 32-bit ARGB value. */
			public number: number;
			/** Red component value. */
			public red: number;
			public constructor();
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * Retrieves the hexadecimal value of this color, including the 
			 * alpha channel.
			 */
			public toString(): string;
		}
	}
}