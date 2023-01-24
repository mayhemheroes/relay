# Build Stage
FROM ghcr.io/evanrichter/cargo-fuzz:latest AS builder

# Add source code
ADD . /src

WORKDIR /src
RUN cd compiler/crates/schema && cargo fuzz build

WORKDIR /src
RUN cd /src/compiler/crates/extract-graphql && cargo fuzz build

# Package Stage
FROM ubuntu:latest
COPY --from=builder /src/compiler/crates/schema/fuzz/target/x86_64-unknown-linux-gnu/release/fuzz_* /fuzzers/
COPY --from=builder /src/compiler/crates/extract-graphql/fuzz/target/x86_64-unknown-linux-gnu/release/fuzz_* /fuzzers/