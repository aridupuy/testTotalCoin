CREATE TABLE totalcoin.public.button (
       id serial NOT NULL,
       count integer NOT NULL DEFAULT 0,
       "timestamp" timestamp NOT NULL DEFAULT now(),
       CONSTRAINT button_pk PRIMARY KEY (id)
);

