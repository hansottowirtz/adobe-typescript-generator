/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * A channel in a document. Can be either a component channel 
		 * representing a color of the document color model or an alpha 
		 * channel
		 */
		class Channel extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** color of the channel (not valid for component channels) */
			public color: Adobe.Photoshop.SolidColor;
			/** a histogram of values for the channel */
			public readonly histogram: any[];
			/** type of the channel */
			public kind: Adobe.Photoshop.ChannelType;
			/** the channel's name */
			public name: string;
			/**
			 * opacity of alpha channels (called solidity for spot 
			 * channels)
			 */
			public opacity: number;
			public visible: boolean;
			/**
			 * duplicate the channel
			 * @param {Adobe.Photoshop.Document} targetDocument the 
			 * document to duplicate the channel to
			 */
			public duplicate(targetDocument: Adobe.Photoshop.Document): Adobe.Photoshop.Channel;
			/** merge a spot channel into the component channels */
			public merge(): void;
			/** delete the object */
			public remove(): void;
		}
	}
}