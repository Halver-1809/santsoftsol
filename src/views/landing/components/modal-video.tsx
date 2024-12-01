import { useRef } from 'react';
import { Image, Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure } from '@chakra-ui/react';

interface ModalVideoProps {
  thumb: string;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      {/* Video thumbnail */}
      <div>
        <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
          <button
            className="absolute group"
            onClick={() => {
              onOpen();
            }}
            aria-label="Watch the video"
          >
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out"
              viewBox="0 0 88 88"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                  <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                  <stop stopColor="#EBF1F5" offset="100%" />
                </linearGradient>
              </defs>
              <circle fill="url(#a)" cx="44" cy="44" r="44" />
              <path
                className="fill-current text-purple-600"
                d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* End: Video thumbnail */}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={0}>
            <div className="aspect-video bg-black">
              <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* End: Modal */}
    </div>
  );
}
