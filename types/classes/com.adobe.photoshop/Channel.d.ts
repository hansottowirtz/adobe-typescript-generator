/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * A channel in a document. Can be either a component channel 
		 * representing a color of the document color model or an alpha 
		 * channel
		 */
		class Channel extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * color of the channel (not valid for component channels)
			 * @type {Adobe.Photoshop.SolidColor}
			 */
			public color: Adobe.Photoshop.SolidColor;
			/**
			 * a histogram of values for the channel
			 * @type {any[]}
			 * @readonly
			 */
			public readonly histogram: any[];
			/**
			 * type of the channel
			 * @type {Adobe.Photoshop.ChannelType}
			 */
			public kind: Adobe.Photoshop.ChannelType;
			/**
			 * the channel's name
			 * @type {string}
			 */
			public name: string;
			/**
			 * opacity of alpha channels (called solidity for spot 
			 * channels)
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * duplicate the channel
			 * @param {Adobe.Photoshop.Document} targetDocument the 
			 * document to duplicate the channel to
			 * @returns {Adobe.Photoshop.Channel}
			 */
			public duplicate(targetDocument: Adobe.Photoshop.Document): Adobe.Photoshop.Channel;
			/**
			 * merge a spot channel into the component channels
			 * @returns {void}
			 */
			public merge(): void;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}